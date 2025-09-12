import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutSuperContestCombosSecondInput } from "../inputs/MovesUpdateWithoutSuperContestCombosSecondInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpdateToOneWithWhereWithoutSuperContestCombosSecondInput", {})
export class MovesUpdateToOneWithWhereWithoutSuperContestCombosSecondInput {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutSuperContestCombosSecondInput;
}
