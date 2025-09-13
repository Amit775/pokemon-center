import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutAbilitiesInput } from "../inputs/PokemonCreateOrConnectWithoutAbilitiesInput";
import { PokemonCreateWithoutAbilitiesInput } from "../inputs/PokemonCreateWithoutAbilitiesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateNestedOneWithoutAbilitiesInput", {})
export class PokemonCreateNestedOneWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutAbilitiesInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutAbilitiesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutAbilitiesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;
}
