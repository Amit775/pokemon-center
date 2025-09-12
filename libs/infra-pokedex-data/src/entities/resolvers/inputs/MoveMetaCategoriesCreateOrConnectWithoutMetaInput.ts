import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesCreateWithoutMetaInput } from "../inputs/MoveMetaCategoriesCreateWithoutMetaInput";
import { MoveMetaCategoriesWhereUniqueInput } from "../inputs/MoveMetaCategoriesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCategoriesCreateOrConnectWithoutMetaInput", {})
export class MoveMetaCategoriesCreateOrConnectWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: MoveMetaCategoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MoveMetaCategoriesCreateWithoutMetaInput;
}
