import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCreateWithoutMetaCategoryInput } from "../inputs/MoveMetaCreateWithoutMetaCategoryInput";
import { MoveMetaWhereUniqueInput } from "../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCreateOrConnectWithoutMetaCategoryInput", {})
export class MoveMetaCreateOrConnectWithoutMetaCategoryInput {
  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaCreateWithoutMetaCategoryInput, {
    nullable: false
  })
  create!: MoveMetaCreateWithoutMetaCategoryInput;
}
