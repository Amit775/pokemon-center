import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupPokemonMoveMethodCreateManyMoveMethodInputEnvelope } from "../inputs/VersionGroupPokemonMoveMethodCreateManyMoveMethodInputEnvelope";
import { VersionGroupPokemonMoveMethodCreateOrConnectWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodCreateOrConnectWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodScalarWhereInput } from "../inputs/VersionGroupPokemonMoveMethodScalarWhereInput";
import { VersionGroupPokemonMoveMethodUpdateManyWithWhereWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodUpdateManyWithWhereWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutMoveMethodInput } from "../inputs/VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutMoveMethodInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupPokemonMoveMethodUpdateManyWithoutMoveMethodNestedInput", {})
export class VersionGroupPokemonMoveMethodUpdateManyWithoutMoveMethodNestedInput {
  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput], {
    nullable: true
  })
  create?: VersionGroupPokemonMoveMethodCreateWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodCreateOrConnectWithoutMoveMethodInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupPokemonMoveMethodCreateOrConnectWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutMoveMethodInput], {
    nullable: true
  })
  upsert?: VersionGroupPokemonMoveMethodUpsertWithWhereUniqueWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodCreateManyMoveMethodInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupPokemonMoveMethodCreateManyMoveMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereUniqueInput], {
    nullable: true
  })
  set?: VersionGroupPokemonMoveMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VersionGroupPokemonMoveMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereUniqueInput], {
    nullable: true
  })
  delete?: VersionGroupPokemonMoveMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupPokemonMoveMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutMoveMethodInput], {
    nullable: true
  })
  update?: VersionGroupPokemonMoveMethodUpdateWithWhereUniqueWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodUpdateManyWithWhereWithoutMoveMethodInput], {
    nullable: true
  })
  updateMany?: VersionGroupPokemonMoveMethodUpdateManyWithWhereWithoutMoveMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionGroupPokemonMoveMethodScalarWhereInput[] | undefined;
}
