import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesUpdateWithoutRegionInput } from "../inputs/PokedexesUpdateWithoutRegionInput";
import { PokedexesWhereUniqueInput } from "../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.InputType("PokedexesUpdateWithWhereUniqueWithoutRegionInput", {})
export class PokedexesUpdateWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexesUpdateWithoutRegionInput, {
    nullable: false
  })
  data!: PokedexesUpdateWithoutRegionInput;
}
