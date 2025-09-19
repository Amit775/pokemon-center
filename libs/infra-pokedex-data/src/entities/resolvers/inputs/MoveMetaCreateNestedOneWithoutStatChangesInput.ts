import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateOrConnectWithoutStatChangesInput } from "../inputs/MoveMetaCreateOrConnectWithoutStatChangesInput";
import { MoveMetaCreateWithoutStatChangesInput } from "../inputs/MoveMetaCreateWithoutStatChangesInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCreateNestedOneWithoutStatChangesInput", {})
export class MoveMetaCreateNestedOneWithoutStatChangesInput {
  @TypeGraphQL.Field(_type => MoveMetaCreateWithoutStatChangesInput, {
    nullable: true
  })
  create?: MoveMetaCreateWithoutStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCreateOrConnectWithoutStatChangesInput, {
    nullable: true
  })
  connectOrCreate?: MoveMetaCreateOrConnectWithoutStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveMetaWhereUniqueInput | undefined;
}
