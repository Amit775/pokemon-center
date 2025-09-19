import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexUpdateWithoutRegionInput } from "../inputs/PokedexUpdateWithoutRegionInput";
import { PokedexWhereUniqueInput } from "../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.InputType("PokedexUpdateWithWhereUniqueWithoutRegionInput", {})
export class PokedexUpdateWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokedexUpdateWithoutRegionInput, {
    nullable: false
  })
  data!: PokedexUpdateWithoutRegionInput;
}
