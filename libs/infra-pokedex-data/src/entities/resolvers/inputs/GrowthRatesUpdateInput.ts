import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceUpdateManyWithoutGrowthRateNestedInput } from "../inputs/ExperienceUpdateManyWithoutGrowthRateNestedInput";
import { PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput";

@TypeGraphQL.InputType("GrowthRatesUpdateInput", {})
export class GrowthRatesUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  formula?: string | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceUpdateManyWithoutGrowthRateNestedInput, {
    nullable: true
  })
  experience?: ExperienceUpdateManyWithoutGrowthRateNestedInput | undefined;
}
