import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenderOrderByWithRelationInput } from "../../../inputs/GenderOrderByWithRelationInput";
import { GenderWhereInput } from "../../../inputs/GenderWhereInput";
import { GenderWhereUniqueInput } from "../../../inputs/GenderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGenderArgs {
  @TypeGraphQL.Field(_type => GenderWhereInput, {
    nullable: true
  })
  where?: GenderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GenderOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GenderOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GenderWhereUniqueInput, {
    nullable: true
  })
  cursor?: GenderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
