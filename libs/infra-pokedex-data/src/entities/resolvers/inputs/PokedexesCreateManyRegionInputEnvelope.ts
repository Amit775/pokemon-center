import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateManyRegionInput } from "../inputs/PokedexesCreateManyRegionInput";

@TypeGraphQL.InputType("PokedexesCreateManyRegionInputEnvelope", {})
export class PokedexesCreateManyRegionInputEnvelope {
  @TypeGraphQL.Field(_type => [PokedexesCreateManyRegionInput], {
    nullable: false
  })
  data!: PokedexesCreateManyRegionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
