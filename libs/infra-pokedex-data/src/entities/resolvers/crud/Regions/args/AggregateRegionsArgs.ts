import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionsOrderByWithRelationInput } from "../../../inputs/RegionsOrderByWithRelationInput";
import { RegionsWhereInput } from "../../../inputs/RegionsWhereInput";
import { RegionsWhereUniqueInput } from "../../../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRegionsArgs {
  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RegionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RegionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RegionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
