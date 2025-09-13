import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope } from "../inputs/VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope";
import { VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodsCreateNestedManyWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput], {
    nullable: true
  })
  create?: VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupPokemonMoveMethodsWhereUniqueInput[] | undefined;
}
