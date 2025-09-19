import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ContestComboScalarWhereInput", {})
export class ContestComboScalarWhereInput {
  @TypeGraphQL.Field(_type => [ContestComboScalarWhereInput], {
    nullable: true
  })
  AND?: ContestComboScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboScalarWhereInput], {
    nullable: true
  })
  OR?: ContestComboScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboScalarWhereInput], {
    nullable: true
  })
  NOT?: ContestComboScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  first_move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  second_move_id?: IntFilter | undefined;
}
