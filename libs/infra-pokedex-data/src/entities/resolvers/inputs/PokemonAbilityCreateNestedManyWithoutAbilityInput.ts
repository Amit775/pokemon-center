import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityCreateManyAbilityInputEnvelope } from "../inputs/PokemonAbilityCreateManyAbilityInputEnvelope";
import { PokemonAbilityCreateOrConnectWithoutAbilityInput } from "../inputs/PokemonAbilityCreateOrConnectWithoutAbilityInput";
import { PokemonAbilityCreateWithoutAbilityInput } from "../inputs/PokemonAbilityCreateWithoutAbilityInput";
import { PokemonAbilityWhereUniqueInput } from "../inputs/PokemonAbilityWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilityCreateNestedManyWithoutAbilityInput", {})
export class PokemonAbilityCreateNestedManyWithoutAbilityInput {
  @TypeGraphQL.Field(_type => [PokemonAbilityCreateWithoutAbilityInput], {
    nullable: true
  })
  create?: PokemonAbilityCreateWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityCreateOrConnectWithoutAbilityInput], {
    nullable: true
  })
  connectOrCreate?: PokemonAbilityCreateOrConnectWithoutAbilityInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityCreateManyAbilityInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonAbilityCreateManyAbilityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilityWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonAbilityWhereUniqueInput[] | undefined;
}
