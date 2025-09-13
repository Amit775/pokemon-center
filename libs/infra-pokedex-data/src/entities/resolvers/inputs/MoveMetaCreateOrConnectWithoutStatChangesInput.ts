import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateWithoutStatChangesInput } from "../inputs/MoveMetaCreateWithoutStatChangesInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCreateOrConnectWithoutStatChangesInput", {})
export class MoveMetaCreateOrConnectWithoutStatChangesInput {
  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaCreateWithoutStatChangesInput, {
    nullable: false
  })
  create!: MoveMetaCreateWithoutStatChangesInput;
}
