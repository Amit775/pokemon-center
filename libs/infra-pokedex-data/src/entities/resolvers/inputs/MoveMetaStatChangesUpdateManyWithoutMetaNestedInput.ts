import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateManyMetaInputEnvelope } from "../inputs/MoveMetaStatChangesCreateManyMetaInputEnvelope";
import { MoveMetaStatChangesCreateOrConnectWithoutMetaInput } from "../inputs/MoveMetaStatChangesCreateOrConnectWithoutMetaInput";
import { MoveMetaStatChangesCreateWithoutMetaInput } from "../inputs/MoveMetaStatChangesCreateWithoutMetaInput";
import { MoveMetaStatChangesScalarWhereInput } from "../inputs/MoveMetaStatChangesScalarWhereInput";
import { MoveMetaStatChangesUpdateManyWithWhereWithoutMetaInput } from "../inputs/MoveMetaStatChangesUpdateManyWithWhereWithoutMetaInput";
import { MoveMetaStatChangesUpdateWithWhereUniqueWithoutMetaInput } from "../inputs/MoveMetaStatChangesUpdateWithWhereUniqueWithoutMetaInput";
import { MoveMetaStatChangesUpsertWithWhereUniqueWithoutMetaInput } from "../inputs/MoveMetaStatChangesUpsertWithWhereUniqueWithoutMetaInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesUpdateManyWithoutMetaNestedInput", {})
export class MoveMetaStatChangesUpdateManyWithoutMetaNestedInput {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateWithoutMetaInput], {
    nullable: true
  })
  create?: MoveMetaStatChangesCreateWithoutMetaInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateOrConnectWithoutMetaInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaStatChangesCreateOrConnectWithoutMetaInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesUpsertWithWhereUniqueWithoutMetaInput], {
    nullable: true
  })
  upsert?: MoveMetaStatChangesUpsertWithWhereUniqueWithoutMetaInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateManyMetaInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaStatChangesCreateManyMetaInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesUpdateWithWhereUniqueWithoutMetaInput], {
    nullable: true
  })
  update?: MoveMetaStatChangesUpdateWithWhereUniqueWithoutMetaInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesUpdateManyWithWhereWithoutMetaInput], {
    nullable: true
  })
  updateMany?: MoveMetaStatChangesUpdateManyWithWhereWithoutMetaInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveMetaStatChangesScalarWhereInput[] | undefined;
}
