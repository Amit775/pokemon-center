import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesCreateOrConnectWithoutMetaInput } from "../inputs/MoveMetaCategoriesCreateOrConnectWithoutMetaInput";
import { MoveMetaCategoriesCreateWithoutMetaInput } from "../inputs/MoveMetaCategoriesCreateWithoutMetaInput";
import { MoveMetaCategoriesWhereUniqueInput } from "../inputs/MoveMetaCategoriesWhereUniqueInput";

@TypeGraphQL.InputType("MoveMetaCategoriesCreateNestedOneWithoutMetaInput", {})
export class MoveMetaCategoriesCreateNestedOneWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesCreateWithoutMetaInput, {
    nullable: true
  })
  create?: MoveMetaCategoriesCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesCreateOrConnectWithoutMetaInput, {
    nullable: true
  })
  connectOrCreate?: MoveMetaCategoriesCreateOrConnectWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveMetaCategoriesWhereUniqueInput | undefined;
}
