import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateWithoutRegionInput } from "../inputs/PokedexCreateWithoutRegionInput";
import { PokedexUpdateWithoutRegionInput } from "../inputs/PokedexUpdateWithoutRegionInput";
import { PokedexWhereUniqueInput } from "../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.InputType("PokedexUpsertWithWhereUniqueWithoutRegionInput", {})
export class PokedexUpsertWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexUpdateWithoutRegionInput, {
    nullable: false
  })
  update!: PokedexUpdateWithoutRegionInput;

  @TypeGraphQL.Field(_type => PokedexCreateWithoutRegionInput, {
    nullable: false
  })
  create!: PokedexCreateWithoutRegionInput;
}
