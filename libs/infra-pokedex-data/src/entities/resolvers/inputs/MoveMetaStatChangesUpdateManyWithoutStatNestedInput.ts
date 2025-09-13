import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateManyStatInputEnvelope } from "../inputs/MoveMetaStatChangesCreateManyStatInputEnvelope";
import { MoveMetaStatChangesCreateOrConnectWithoutStatInput } from "../inputs/MoveMetaStatChangesCreateOrConnectWithoutStatInput";
import { MoveMetaStatChangesCreateWithoutStatInput } from "../inputs/MoveMetaStatChangesCreateWithoutStatInput";
import { MoveMetaStatChangesScalarWhereInput } from "../inputs/MoveMetaStatChangesScalarWhereInput";
import { MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput } from "../inputs/MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput";
import { MoveMetaStatChangesUpdateWithWhereUniqueWithoutStatInput } from "../inputs/MoveMetaStatChangesUpdateWithWhereUniqueWithoutStatInput";
import { MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput } from "../inputs/MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateManyWithoutStatNestedInput", {})
export class MoveMetaStatChangesUpdateManyWithoutStatNestedInput {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateWithoutStatInput], {
    nullable: true
  })
  create?: MoveMetaStatChangesCreateWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateOrConnectWithoutStatInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaStatChangesCreateOrConnectWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput], {
    nullable: true
  })
  upsert?: MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateManyStatInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaStatChangesCreateManyStatInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesWhereUniqueInput], {
    nullable: true
  })
  set?: MoveMetaStatChangesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MoveMetaStatChangesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesWhereUniqueInput], {
    nullable: true
  })
  delete?: MoveMetaStatChangesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveMetaStatChangesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesUpdateWithWhereUniqueWithoutStatInput], {
    nullable: true
  })
  update?: MoveMetaStatChangesUpdateWithWhereUniqueWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput], {
    nullable: true
  })
  updateMany?: MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveMetaStatChangesScalarWhereInput[] | undefined;
}
