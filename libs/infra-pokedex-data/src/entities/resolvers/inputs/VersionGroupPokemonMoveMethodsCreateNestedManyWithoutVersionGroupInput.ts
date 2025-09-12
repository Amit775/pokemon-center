import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope } from "../inputs/VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope";
import { VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodsCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionGroupPokemonMoveMethodsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupPokemonMoveMethodsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupPokemonMoveMethodsWhereUniqueInput[] | undefined;
}
