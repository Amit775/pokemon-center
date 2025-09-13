import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateManyMetaCategoryInputEnvelope } from "../inputs/MoveMetaCreateManyMetaCategoryInputEnvelope";
import { MoveMetaCreateOrConnectWithoutMetaCategoryInput } from "../inputs/MoveMetaCreateOrConnectWithoutMetaCategoryInput";
import { MoveMetaCreateWithoutMetaCategoryInput } from "../inputs/MoveMetaCreateWithoutMetaCategoryInput";
import { MoveMetaScalarWhereInput } from "../inputs/MoveMetaScalarWhereInput";
import { MoveMetaUpdateManyWithWhereWithoutMetaCategoryInput } from "../inputs/MoveMetaUpdateManyWithWhereWithoutMetaCategoryInput";
import { MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput } from "../inputs/MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput";
import { MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput } from "../inputs/MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaUpdateManyWithoutMetaCategoryNestedInput", {})
export class MoveMetaUpdateManyWithoutMetaCategoryNestedInput {
  @TypeGraphQL.Field(_type => [MoveMetaCreateWithoutMetaCategoryInput], {
    nullable: true
  })
  create?: MoveMetaCreateWithoutMetaCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCreateOrConnectWithoutMetaCategoryInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaCreateOrConnectWithoutMetaCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput], {
    nullable: true
  })
  upsert?: MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCreateManyMetaCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaCreateManyMetaCategoryInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput], {
    nullable: true
  })
  update?: MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaUpdateManyWithWhereWithoutMetaCategoryInput], {
    nullable: true
  })
  updateMany?: MoveMetaUpdateManyWithWhereWithoutMetaCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveMetaScalarWhereInput[] | undefined;
}
