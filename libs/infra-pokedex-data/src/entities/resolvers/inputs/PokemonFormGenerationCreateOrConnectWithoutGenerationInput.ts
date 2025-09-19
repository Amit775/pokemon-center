import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationCreateWithoutGenerationInput } from "../inputs/PokemonFormGenerationCreateWithoutGenerationInput";
import { PokemonFormGenerationWhereUniqueInput } from "../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationCreateOrConnectWithoutGenerationInput", {})
export class PokemonFormGenerationCreateOrConnectWithoutGenerationInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: PokemonFormGenerationCreateWithoutGenerationInput;
}
