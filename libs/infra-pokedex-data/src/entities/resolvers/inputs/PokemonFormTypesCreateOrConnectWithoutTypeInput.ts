import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypesCreateWithoutTypeInput } from "../inputs/PokemonFormTypesCreateWithoutTypeInput";
import { PokemonFormTypesWhereUniqueInput } from "../inputs/PokemonFormTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormTypesCreateOrConnectWithoutTypeInput", {})
export class PokemonFormTypesCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonFormTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateWithoutTypeInput, {
    nullable: false
  })
  create!: PokemonFormTypesCreateWithoutTypeInput;
}
