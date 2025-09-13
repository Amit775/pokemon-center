import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsCreateManyEggGroupInputEnvelope } from "../inputs/PokemonEggGroupsCreateManyEggGroupInputEnvelope";
import { PokemonEggGroupsCreateOrConnectWithoutEggGroupInput } from "../inputs/PokemonEggGroupsCreateOrConnectWithoutEggGroupInput";
import { PokemonEggGroupsCreateWithoutEggGroupInput } from "../inputs/PokemonEggGroupsCreateWithoutEggGroupInput";
import { PokemonEggGroupsWhereUniqueInput } from "../inputs/PokemonEggGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupsCreateNestedManyWithoutEggGroupInput", {})
export class PokemonEggGroupsCreateNestedManyWithoutEggGroupInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateWithoutEggGroupInput], {
    nullable: true
  })
  create?: PokemonEggGroupsCreateWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateOrConnectWithoutEggGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEggGroupsCreateOrConnectWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsCreateManyEggGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEggGroupsCreateManyEggGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEggGroupsWhereUniqueInput[] | undefined;
}
