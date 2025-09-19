import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodCreateManyVersionGroupInputEnvelope } from "../inputs/VersionGroupPokemonMoveMethodCreateManyVersionGroupInputEnvelope";
import { VersionGroupPokemonMoveMethodCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodCreateOrConnectWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput } from "../inputs/VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodCreateNestedManyWithoutVersionGroupInput", {})
export class VersionGroupPokemonMoveMethodCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionGroupPokemonMoveMethodCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupPokemonMoveMethodCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupPokemonMoveMethodCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupPokemonMoveMethodWhereUniqueInput[] | undefined;
}
