import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesUpdateWithoutMetaInput } from "../inputs/MoveMetaCategoriesUpdateWithoutMetaInput";
import { MoveMetaCategoriesWhereInput } from "../inputs/MoveMetaCategoriesWhereInput";

@TypeGraphQL.InputType("MoveMetaCategoriesUpdateToOneWithWhereWithoutMetaInput", {})
export class MoveMetaCategoriesUpdateToOneWithWhereWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesUpdateWithoutMetaInput, {
    nullable: false
  })
  data!: MoveMetaCategoriesUpdateWithoutMetaInput;
}
