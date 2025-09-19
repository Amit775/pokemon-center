import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateWithoutGenerationsInput } from "../inputs/PokemonFormCreateWithoutGenerationsInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormCreateOrConnectWithoutGenerationsInput", {})
export class PokemonFormCreateOrConnectWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutGenerationsInput, {
    nullable: false
  })
  create!: PokemonFormCreateWithoutGenerationsInput;
}
