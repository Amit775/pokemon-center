import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodCreateManyMoveMethodInputEnvelope } from "../inputs/VersionGroupPokemonMoveMethodCreateManyMoveMethodInputEnvelope";
import { VersionGroupPokemonMoveMethodCreateOrConnectWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodCreateOrConnectWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodCreateNestedManyWithoutMoveMethodInput", {})
export class VersionGroupPokemonMoveMethodCreateNestedManyWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput], {
    nullable: true
  })
  create?: VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateOrConnectWithoutMoveMethodInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupPokemonMoveMethodCreateOrConnectWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateManyMoveMethodInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupPokemonMoveMethodCreateManyMoveMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupPokemonMoveMethodWhereUniqueInput[] | undefined;
}
