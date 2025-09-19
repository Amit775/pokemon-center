import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateManyRegionInput } from "../inputs/PokedexCreateManyRegionInput";

@TypeGraphQL.InputType("PokedexCreateManyRegionInputEnvelope", {})
export class PokedexCreateManyRegionInputEnvelope {
  @TypeGraphQL.Field(_type => [PokedexCreateManyRegionInput], {
    nullable: false
  })
  data!: PokedexCreateManyRegionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
