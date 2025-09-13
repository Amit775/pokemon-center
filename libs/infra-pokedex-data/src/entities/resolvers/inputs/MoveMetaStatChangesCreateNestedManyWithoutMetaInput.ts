import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateManyMetaInputEnvelope } from "../inputs/MoveMetaStatChangesCreateManyMetaInputEnvelope";
import { MoveMetaStatChangesCreateOrConnectWithoutMetaInput } from "../inputs/MoveMetaStatChangesCreateOrConnectWithoutMetaInput";
import { MoveMetaStatChangesCreateWithoutMetaInput } from "../inputs/MoveMetaStatChangesCreateWithoutMetaInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateNestedManyWithoutMetaInput", {})
export class MoveMetaStatChangesCreateNestedManyWithoutMetaInput {
  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateWithoutMetaInput], {
    nullable: true
  })
  create?: MoveMetaStatChangesCreateWithoutMetaInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesCreateOrConnectWithoutMetaInput], {
    nullable: true
  })
  connectOrCreate?: MoveMetaStatChangesCreateOrConnectWithoutMetaInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateManyMetaInputEnvelope, {
    nullable: true
  })
  createMany?: MoveMetaStatChangesCreateManyMetaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveMetaStatChangesWhereUniqueInput[] | undefined;
}
