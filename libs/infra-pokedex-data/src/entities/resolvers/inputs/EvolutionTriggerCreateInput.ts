import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput";

@TypeGraphQL.InputType("EvolutionTriggerCreateInput", {})
export class EvolutionTriggerCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput | undefined;
}
