'use client'

import {
  Button,
  Pagination as ChakraPagination,
  IconButton,
  Text,
  createContext,
  usePaginationContext,
} from '@chakra-ui/react'
import { forwardRef, useMemo } from 'react'
import {
  HiChevronLeft,
  HiChevronRight,
  HiMiniEllipsisHorizontal,
} from 'react-icons/hi2'
import { LinkButton } from './link-button'

const [RootPropsProvider, useRootProps] = createContext({
  name: 'RootPropsProvider',
})

const variantMap = {
  outline: { default: 'ghost', ellipsis: 'plain', current: 'outline' },
  solid: { default: 'outline', ellipsis: 'outline', current: 'solid' },
  subtle: { default: 'ghost', ellipsis: 'plain', current: 'subtle' },
}

export const PaginationRoot = forwardRef(function PaginationRoot(props, ref) {
  const { size = 'sm', variant = 'outline', getHref, ...rest } = props
  return (
    <RootPropsProvider
      value={{ size, variantMap: variantMap[variant], getHref }}
    >
      <ChakraPagination.Root
        ref={ref}
        type={getHref ? 'link' : 'button'}
        {...rest}
      />
    </RootPropsProvider>
  )
})

export const PaginationEllipsis = forwardRef(
  function PaginationEllipsis(props, ref) {
    const { size, variantMap } = useRootProps()
    return (
      <ChakraPagination.Ellipsis ref={ref} {...props} asChild>
        <Button as='span' variant={variantMap.ellipsis} size={size}>
          <HiMiniEllipsisHorizontal />
        </Button>
      </ChakraPagination.Ellipsis>
    )
  },
)

export const PaginationItem = forwardRef(function PaginationItem(props, ref) {
  const { page } = usePaginationContext()
  const { size, variantMap, getHref } = useRootProps()

  const current = page === props.value
  const variant = current ? variantMap.current : variantMap.default

  if (getHref) {
    return (
      <LinkButton href={getHref(props.value)} variant={variant} size={size}>
        {props.value}
      </LinkButton>
    )
  }

  return (
    <ChakraPagination.Item ref={ref} {...props} asChild>
      <Button variant={variant} size={size}>
        {props.value}
      </Button>
    </ChakraPagination.Item>
  )
})

export const PaginationPrevTrigger = forwardRef(
  function PaginationPrevTrigger(props, ref) {
    const { size, variantMap, getHref } = useRootProps()
    const { previousPage } = usePaginationContext()

    if (getHref) {
      return (
        <LinkButton
          href={previousPage != null ? getHref(previousPage) : undefined}
          variant={variantMap.default}
          size={size}
        >
          <HiChevronLeft />
        </LinkButton>
      )
    }

    return (
      <ChakraPagination.PrevTrigger ref={ref} asChild {...props}>
        <IconButton variant={variantMap.default} size={size}>
          <HiChevronLeft />
        </IconButton>
      </ChakraPagination.PrevTrigger>
    )
  },
)

export const PaginationNextTrigger = forwardRef(
  function PaginationNextTrigger(props, ref) {
    const { size, variantMap, getHref } = useRootProps()
    const { nextPage } = usePaginationContext()

    if (getHref) {
      return (
        <LinkButton
          href={nextPage != null ? getHref(nextPage) : undefined}
          variant={variantMap.default}
          size={size}
        >
          <HiChevronRight />
        </LinkButton>
      )
    }

    return (
      <ChakraPagination.NextTrigger ref={ref} asChild {...props}>
        <IconButton variant={variantMap.default} size={size}>
          <HiChevronRight />
        </IconButton>
      </ChakraPagination.NextTrigger>
    )
  },
)

export const PaginationItems = (props) => {
  return (
    <ChakraPagination.Context>
      {({ pages }) =>
        pages.map((page, index) => {
          return page.type === 'ellipsis' ? (
            <PaginationEllipsis key={index} index={index} {...props} />
          ) : (
            <PaginationItem
              key={index}
              type='page'
              value={page.value}
              {...props}
            />
          )
        })
      }
    </ChakraPagination.Context>
  )
}

export const PaginationPageText = forwardRef(
  function PaginationPageText(props, ref) {
    const { format = 'compact', ...rest } = props
    const { page, totalPages, pageRange, count } = usePaginationContext()
    const content = useMemo(() => {
      if (format === 'short') return `${page} / ${totalPages}`
      if (format === 'compact') return `${page} of ${totalPages}`
      return `${pageRange.start + 1} - ${pageRange.end} of ${count}`
    }, [format, page, totalPages, pageRange, count])

    return (
      <Text fontWeight='medium' ref={ref} {...rest}>
        {content}
      </Text>
    )
  },
)
