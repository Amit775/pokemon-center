import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("TypeGameIndexScalarWhereInput", {})
export class TypeGameIndexScalarWhereInput {
  @TypeGraphQL.Field(_type => [TypeGameIndexScalarWhereInput], {
    nullable: true
  })
  AND?: TypeGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexScalarWhereInput], {
    nullable: true
  })
  OR?: TypeGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexScalarWhereInput], {
    nullable: true
  })
  NOT?: TypeGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;
}
