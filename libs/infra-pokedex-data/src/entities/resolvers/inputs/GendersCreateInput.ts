import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateNestedManyWithoutGenderInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutGenderInput";

@TypeGraphQL.InputType("GendersCreateInput", {})
export class GendersCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutGenderInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionCreateNestedManyWithoutGenderInput | undefined;
}
