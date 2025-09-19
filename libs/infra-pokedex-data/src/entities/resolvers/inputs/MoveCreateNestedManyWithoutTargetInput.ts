import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyTargetInputEnvelope } from "../inputs/MoveCreateManyTargetInputEnvelope";
import { MoveCreateOrConnectWithoutTargetInput } from "../inputs/MoveCreateOrConnectWithoutTargetInput";
import { MoveCreateWithoutTargetInput } from "../inputs/MoveCreateWithoutTargetInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedManyWithoutTargetInput", {})
export class MoveCreateNestedManyWithoutTargetInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutTargetInput], {
    nullable: true
  })
  create?: MoveCreateWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutTargetInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutTargetInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyTargetInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyTargetInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;
}
