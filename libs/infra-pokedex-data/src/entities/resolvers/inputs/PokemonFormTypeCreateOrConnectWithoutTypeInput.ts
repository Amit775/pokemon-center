import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeCreateWithoutTypeInput } from "../inputs/PokemonFormTypeCreateWithoutTypeInput";
import { PokemonFormTypeWhereUniqueInput } from "../inputs/PokemonFormTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypeCreateOrConnectWithoutTypeInput", {})
export class PokemonFormTypeCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeCreateWithoutTypeInput, {
    nullable: false
  })
  create!: PokemonFormTypeCreateWithoutTypeInput;
}
