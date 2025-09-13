import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateManyMoveInputEnvelope } from "../inputs/MoveMetaStatChangesCreateManyMoveInputEnvelope";
import { MoveMetaStatChangesCreateOrConnectWithoutMoveInput } from "../inputs/MoveMetaStatChangesCreateOrConnectWithoutMoveInput";
import { MoveMetaStatChangesCreateWithoutMoveInput } from "../inputs/MoveMetaStatChangesCreateWithoutMoveInput";
import { MoveMetaStatChangesScalarWhereInput } from "../inputs/MoveMetaStatChangesScalarWhereInput";
import { MoveMetaStatChangesUpdateManyWithWhereWithoutMoveInput } from "../inputs/MoveMetaStatChangesUpdateManyWithWhereWithoutMoveInput";
import { MoveMetaStatChangesUpdateWithWhereUniqueWithoutMoveInput } from "../inputs/MoveMetaStatChangesUpdateWithWhereUniqueWithoutMoveInput";
import { MoveMetaStatChangesUpsertWithWhereUniqueWithoutMoveInput } from "../inputs/MoveMetaStatChangesUpsertWithWhereUniqueWithoutMoveInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateManyWithoutMoveNestedInput", {})
export class MoveMetaStatChangesUpdateManyWithoutMoveNestedInput {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateWithoutMoveInput], {
    nullable: true
  })
  create?: MoveMetaStatChangesCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaStatChangesCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesUpsertWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  upsert?: MoveMetaStatChangesUpsertWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaStatChangesCreateManyMoveInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesUpdateWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  update?: MoveMetaStatChangesUpdateWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesUpdateManyWithWhereWithoutMoveInput], {
    nullable: true
  })
  updateMany?: MoveMetaStatChangesUpdateManyWithWhereWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveMetaStatChangesScalarWhereInput[] | undefined;
}
