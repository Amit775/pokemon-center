import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateManyMoveInputEnvelope } from "../inputs/MoveMetaCreateManyMoveInputEnvelope";
import { MoveMetaCreateOrConnectWithoutMoveInput } from "../inputs/MoveMetaCreateOrConnectWithoutMoveInput";
import { MoveMetaCreateWithoutMoveInput } from "../inputs/MoveMetaCreateWithoutMoveInput";
import { MoveMetaScalarWhereInput } from "../inputs/MoveMetaScalarWhereInput";
import { MoveMetaUpdateManyWithWhereWithoutMoveInput } from "../inputs/MoveMetaUpdateManyWithWhereWithoutMoveInput";
import { MoveMetaUpdateWithWhereUniqueWithoutMoveInput } from "../inputs/MoveMetaUpdateWithWhereUniqueWithoutMoveInput";
import { MoveMetaUpsertWithWhereUniqueWithoutMoveInput } from "../inputs/MoveMetaUpsertWithWhereUniqueWithoutMoveInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaUpdateManyWithoutMoveNestedInput", {})
export class MoveMetaUpdateManyWithoutMoveNestedInput {
  @TypeGraphQL.Field(_type => [MoveMetaCreateWithoutMoveInput], {
    nullable: true
  })
  create?: MoveMetaCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaUpsertWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  upsert?: MoveMetaUpsertWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaCreateManyMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  set?: MoveMetaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MoveMetaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  delete?: MoveMetaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveMetaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaUpdateWithWhereUniqueWithoutMoveInput], {
    nullable: true
  })
  update?: MoveMetaUpdateWithWhereUniqueWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaUpdateManyWithWhereWithoutMoveInput], {
    nullable: true
  })
  updateMany?: MoveMetaUpdateManyWithWhereWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveMetaScalarWhereInput[] | undefined;
}
