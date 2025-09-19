import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesCreateWithoutMetaInput } from "../inputs/MoveMetaStatChangesCreateWithoutMetaInput";
import { MoveMetaStatChangesWhereUniqueInput } from "../inputs/MoveMetaStatChangesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaStatChangesCreateOrConnectWithoutMetaInput", {})
export class MoveMetaStatChangesCreateOrConnectWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaStatChangesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MoveMetaStatChangesCreateWithoutMetaInput;
}
