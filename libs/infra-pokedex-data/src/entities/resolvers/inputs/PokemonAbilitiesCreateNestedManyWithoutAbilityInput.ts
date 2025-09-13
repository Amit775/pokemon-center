import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateManyAbilityInputEnvelope } from "../inputs/PokemonAbilitiesCreateManyAbilityInputEnvelope";
import { PokemonAbilitiesCreateOrConnectWithoutAbilityInput } from "../inputs/PokemonAbilitiesCreateOrConnectWithoutAbilityInput";
import { PokemonAbilitiesCreateWithoutAbilityInput } from "../inputs/PokemonAbilitiesCreateWithoutAbilityInput";
import { PokemonAbilitiesWhereUniqueInput } from "../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilitiesCreateNestedManyWithoutAbilityInput", {})
export class PokemonAbilitiesCreateNestedManyWithoutAbilityInput {
  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateWithoutAbilityInput], {
    nullable: true
  })
  create?: PokemonAbilitiesCreateWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateOrConnectWithoutAbilityInput], {
    nullable: true
  })
  connectOrCreate?: PokemonAbilitiesCreateOrConnectWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateManyAbilityInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonAbilitiesCreateManyAbilityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonAbilitiesWhereUniqueInput[] | undefined;
}
