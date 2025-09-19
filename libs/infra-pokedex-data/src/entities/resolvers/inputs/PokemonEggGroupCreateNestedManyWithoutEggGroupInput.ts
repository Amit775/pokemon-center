import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupCreateManyEggGroupInputEnvelope } from "../inputs/PokemonEggGroupCreateManyEggGroupInputEnvelope";
import { PokemonEggGroupCreateOrConnectWithoutEggGroupInput } from "../inputs/PokemonEggGroupCreateOrConnectWithoutEggGroupInput";
import { PokemonEggGroupCreateWithoutEggGroupInput } from "../inputs/PokemonEggGroupCreateWithoutEggGroupInput";
import { PokemonEggGroupWhereUniqueInput } from "../inputs/PokemonEggGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEggGroupCreateNestedManyWithoutEggGroupInput", {})
export class PokemonEggGroupCreateNestedManyWithoutEggGroupInput {
  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateWithoutEggGroupInput], {
    nullable: true
  })
  create?: PokemonEggGroupCreateWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateOrConnectWithoutEggGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokemonEggGroupCreateOrConnectWithoutEggGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupCreateManyEggGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonEggGroupCreateManyEggGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonEggGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonEggGroupWhereUniqueInput[] | undefined;
}
