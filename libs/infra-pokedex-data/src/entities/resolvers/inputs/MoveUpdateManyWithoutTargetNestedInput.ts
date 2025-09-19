import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyTargetInputEnvelope } from "../inputs/MoveCreateManyTargetInputEnvelope";
import { MoveCreateOrConnectWithoutTargetInput } from "../inputs/MoveCreateOrConnectWithoutTargetInput";
import { MoveCreateWithoutTargetInput } from "../inputs/MoveCreateWithoutTargetInput";
import { MoveScalarWhereInput } from "../inputs/MoveScalarWhereInput";
import { MoveUpdateManyWithWhereWithoutTargetInput } from "../inputs/MoveUpdateManyWithWhereWithoutTargetInput";
import { MoveUpdateWithWhereUniqueWithoutTargetInput } from "../inputs/MoveUpdateWithWhereUniqueWithoutTargetInput";
import { MoveUpsertWithWhereUniqueWithoutTargetInput } from "../inputs/MoveUpsertWithWhereUniqueWithoutTargetInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateManyWithoutTargetNestedInput", {})
export class MoveUpdateManyWithoutTargetNestedInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutTargetInput], {
    nullable: true
  })
  create?: MoveCreateWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutTargetInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpsertWithWhereUniqueWithoutTargetInput], {
    nullable: true
  })
  upsert?: MoveUpsertWithWhereUniqueWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyTargetInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyTargetInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  set?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  delete?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateWithWhereUniqueWithoutTargetInput], {
    nullable: true
  })
  update?: MoveUpdateWithWhereUniqueWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveUpdateManyWithWhereWithoutTargetInput], {
    nullable: true
  })
  updateMany?: MoveUpdateManyWithWhereWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MoveScalarWhereInput[] | undefined;
}
