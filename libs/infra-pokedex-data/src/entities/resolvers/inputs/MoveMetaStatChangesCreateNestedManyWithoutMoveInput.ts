import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateManyMoveInputEnvelope } from "../inputs/MoveMetaStatChangesCreateManyMoveInputEnvelope";
import { MoveMetaStatChangesCreateOrConnectWithoutMoveInput } from "../inputs/MoveMetaStatChangesCreateOrConnectWithoutMoveInput";
import { MoveMetaStatChangesCreateWithoutMoveInput } from "../inputs/MoveMetaStatChangesCreateWithoutMoveInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateNestedManyWithoutMoveInput", {})
export class MoveMetaStatChangesCreateNestedManyWithoutMoveInput {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateWithoutMoveInput], {
    nullable: true
  })
  create?: MoveMetaStatChangesCreateWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateOrConnectWithoutMoveInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaStatChangesCreateOrConnectWithoutMoveInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateManyMoveInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaStatChangesCreateManyMoveInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveMetaStatChangesWhereUniqueInput[] | undefined;
}
