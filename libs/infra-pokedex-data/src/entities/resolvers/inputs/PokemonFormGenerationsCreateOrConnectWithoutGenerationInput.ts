import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateWithoutGenerationInput } from "../inputs/PokemonFormGenerationsCreateWithoutGenerationInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationsCreateOrConnectWithoutGenerationInput", {})
export class PokemonFormGenerationsCreateOrConnectWithoutGenerationInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: PokemonFormGenerationsCreateWithoutGenerationInput;
}
