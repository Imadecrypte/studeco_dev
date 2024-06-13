<template>
  <div></div>
</template>

<script lang="ts">
export default {
  mounted() {
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2826188379143900";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }
}
</script>
