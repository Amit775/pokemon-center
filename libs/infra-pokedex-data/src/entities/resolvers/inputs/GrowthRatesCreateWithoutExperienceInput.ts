import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateNestedManyWithoutGrowthRateInput } from "../inputs/PokemonSpeciesCreateNestedManyWithoutGrowthRateInput";

@TypeGraphQL.InputType("GrowthRatesCreateWithoutExperienceInput", {})
export class GrowthRatesCreateWithoutExperienceInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  formula!: string;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedManyWithoutGrowthRateInput, {
    nullable: true
  })
  species?: PokemonSpeciesCreateNestedManyWithoutGrowthRateInput | undefined;
}
