import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateWithoutRegionInput } from "../inputs/PokedexesCreateWithoutRegionInput";
import { PokedexesUpdateWithoutRegionInput } from "../inputs/PokedexesUpdateWithoutRegionInput";
import { PokedexesWhereUniqueInput } from "../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.InputType("PokedexesUpsertWithWhereUniqueWithoutRegionInput", {})
export class PokedexesUpsertWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexesUpdateWithoutRegionInput, {
    nullable: false
  })
  update!: PokedexesUpdateWithoutRegionInput;

  @TypeGraphQL.Field(_type => PokedexesCreateWithoutRegionInput, {
    nullable: false
  })
  create!: PokedexesCreateWithoutRegionInput;
}
