import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LanguagesOrderByWithRelationInput } from "../../../inputs/LanguagesOrderByWithRelationInput";
import { LanguagesWhereInput } from "../../../inputs/LanguagesWhereInput";
import { LanguagesWhereUniqueInput } from "../../../inputs/LanguagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLanguagesArgs {
  @TypeGraphQL.Field(_type => LanguagesWhereInput, {
    nullable: true
  })
  where?: LanguagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LanguagesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LanguagesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LanguagesWhereUniqueInput, {
    nullable: true
  })
  cursor?: LanguagesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
