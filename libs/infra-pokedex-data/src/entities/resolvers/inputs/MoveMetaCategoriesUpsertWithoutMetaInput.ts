import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesCreateWithoutMetaInput } from "../inputs/MoveMetaCategoriesCreateWithoutMetaInput";
import { MoveMetaCategoriesUpdateWithoutMetaInput } from "../inputs/MoveMetaCategoriesUpdateWithoutMetaInput";
import { MoveMetaCategoriesWhereInput } from "../inputs/MoveMetaCategoriesWhereInput";

@TypeGraphQL.InputType("MoveMetaCategoriesUpsertWithoutMetaInput", {})
export class MoveMetaCategoriesUpsertWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesUpdateWithoutMetaInput, {
    nullable: false
  })
  update!: MoveMetaCategoriesUpdateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesCreateWithoutMetaInput, {
    nullable: false
  })
  create!: MoveMetaCategoriesCreateWithoutMetaInput;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoriesWhereInput | undefined;
}
