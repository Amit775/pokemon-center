import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("SuperContestComboScalarWhereInput", {})
export class SuperContestComboScalarWhereInput {
  @TypeGraphQL.Field(_type => [SuperContestComboScalarWhereInput], {
    nullable: true
  })
  AND?: SuperContestComboScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboScalarWhereInput], {
    nullable: true
  })
  OR?: SuperContestComboScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboScalarWhereInput], {
    nullable: true
  })
  NOT?: SuperContestComboScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  first_move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  second_move_id?: IntFilter | undefined;
}
