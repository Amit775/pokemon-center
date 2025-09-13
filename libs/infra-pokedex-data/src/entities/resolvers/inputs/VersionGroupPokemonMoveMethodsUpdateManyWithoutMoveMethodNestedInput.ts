import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope } from "../inputs/VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope";
import { VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsScalarWhereInput } from "../inputs/VersionGroupPokemonMoveMethodsScalarWhereInput";
import { VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput", {})
export class VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput], {
    nullable: true
  })
  create?: VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupPokemonMoveMethodsCreateOrConnectWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput], {
    nullable: true
  })
  upsert?: VersionGroupPokemonMoveMethodsUpsertWithWhereUniqueWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {
    nullable: true
  })
  set?: VersionGroupPokemonMoveMethodsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VersionGroupPokemonMoveMethodsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {
    nullable: true
  })
  delete?: VersionGroupPokemonMoveMethodsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupPokemonMoveMethodsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutMoveMethodInput], {
    nullable: true
  })
  update?: VersionGroupPokemonMoveMethodsUpdateWithWhereUniqueWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutMoveMethodInput], {
    nullable: true
  })
  updateMany?: VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionGroupPokemonMoveMethodsScalarWhereInput[] | undefined;
}
