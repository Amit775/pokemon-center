import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceUpdateManyWithoutGrowthRateNestedInput } from "../inputs/ExperienceUpdateManyWithoutGrowthRateNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GrowthRatesUpdateInput", {})
export class GrowthRatesUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  formula?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput, {
    nullable: true
  })
  species?: PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceUpdateManyWithoutGrowthRateNestedInput, {
    nullable: true
  })
  experience?: ExperienceUpdateManyWithoutGrowthRateNestedInput | undefined;
}
